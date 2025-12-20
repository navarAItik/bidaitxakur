export type ProfileType = 'consumer' | 'business_owner' | 'moderator';

export interface UserPreferences {
  notifications: boolean;
  newsletter: boolean;
  regions: string[];
  categories: string[];
}

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  profileType: ProfileType;
  verified: boolean;
  dogsOwned?: number;
  preferences: UserPreferences;
  createdAt: string;
}
