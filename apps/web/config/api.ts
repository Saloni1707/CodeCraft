// API configuration

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const API_ENDPOINTS = {
  CONTESTS: {
    ACTIVE: '/api/contests',
    CREATE: '/api/contests',
    BY_ID: (id: string) => `/api/contests/${id}`,
  },
  CHALLENGES: {
    CREATE: (contestId: string) => `/api/contests/${contestId}/challenges`,
    BY_ID: (contestId: string, challengeId: string) => 
      `/api/contests/${contestId}/challenges/${challengeId}`,
  },
  AUTH: {
    LOGIN: '/api/auth/login',
    PROFILE: '/api/auth/profile',
  },
};

export const BACKEND_ENDPOINTS = {
  CONTESTS: {
    ACTIVE: `${API_BASE_URL}/contest/active`,
    CREATE: `${API_BASE_URL}/contest`,
    BY_ID: (id: string) => `${API_BASE_URL}/contest/${id}`,
  },
  CHALLENGES: {
    CREATE: (contestId: string) => 
      `${API_BASE_URL}/admin/contest/${contestId}/challenge`,
  },
} as const;
