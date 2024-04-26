interface ImportMetaEnv {
  readonly BASE_URL: string;
  VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

module "*.jpg";
module "*.png";
module "*.svg";

module "*react-usa-map";
module "react-hook-form";

// BASE_URL = (process.env.NODE_ENV === 'production') ? "/" : "/dashtic-ts/preview/";
