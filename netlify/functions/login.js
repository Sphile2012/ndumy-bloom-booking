/**
 * Netlify Function: login
 * POST /.netlify/functions/login
 *
 * Email-only login. If the email exists in the users store with role=admin,
 * the session is granted. No password required.
 */

import { getStore } from '@netlify/blobs';

function json(body, status = 200) {
  return {
    statusCode: status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
    },
    body: JSON.stringify(body),
  };
}

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return json({});
  if (event.httpMethod !== 'POST') return json({ message: 'Method not allowed' }, 405);

  try {
    const { email } = JSON.parse(event.body || '{}');

    if (!email?.trim()) {
      return json({ message: 'Email address is required' }, 400);
    }

    const store = getStore('users');
    const { blobs } = await store.list();
    const rows = await Promise.all(
      blobs.map(({ key }) => store.get(key, { type: 'json' }).catch(() => null))
    );
    const users = rows.filter(Boolean);
    const user = users.find(u => u.email?.toLowerCase() === email.trim().toLowerCase());

    if (!user) {
      return json({ message: 'This email is not registered.' }, 401);
    }

    if (user.role !== 'admin') {
      return json({ message: 'Access denied. Admin accounts only.' }, 403);
    }

    return json({ id: user.id, name: user.name, email: user.email, role: user.role });

  } catch (err) {
    console.error('[login]', err);
    return json({ message: err.message || 'Internal server error' }, 500);
  }
};
