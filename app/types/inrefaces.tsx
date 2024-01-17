export interface Charity {
  description: string;
  ein: string;
  name: string;
  profileUrl: string;
  logoUrl: string;
  coverImageUrl: string;
  logoCloudinaryId: string;
  matchedTerms: string[];
  slug: string;
  location: string;
  websiteUrl: string;
  tags: string[];
}

export interface LocalStorageItem {
  description: string;
  ein: string;
  name: string;
  profileUrl: string;
  logoUrl: string;
  coverImageUrl: string;
  location: string;
  websiteUrl: string;
  tags: string[];
}

export interface CharityItemType {
  nonprofit: {
    id: string;
    name: string;
    isDisbursable: boolean;
    locationAddress: string;
    ein: string;
    description: string;
    descriptionLong: string;
    primarySlug: string;
    logoCloudinaryId: string;
    coverImageCloudinaryId: string;
    nteeCode: string;
    nteeCodeMeaning: {
      majorCode: string;
      majorMeaning: string;
      decileCode: string;
      decileMeaning: string;
    };
    hasAdmin: boolean;
    directDisbursement: boolean;
    websiteUrl: string;
    logoUrl: string;
    coverImageUrl: string;
    profileUrl: string;
  };
  nonprofitTags: Tag[];
}

export interface Tag {
  id: string;
  tagName: string;
  causeCategory: string;
  title: string;
  tagImageCloudinaryId: string;
  tagUrl: string;
  tagImageUrl: string;
}
