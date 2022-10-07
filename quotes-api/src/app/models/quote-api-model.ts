export interface Quote {
  text:             string[];
  source:           string;
  sourceTagline:    null | string;
  date:             DateClass;
  photo:            null | string;
  photoAttribution: null | string;
  details:          string;
}

export interface DateClass {
  year:  number | null;
  exact: Date | null;
}