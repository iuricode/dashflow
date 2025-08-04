export type ProductPDFProps = {
  product: Product;
};

export type Parameter = {
  title: string;
  value: string;
};

export type Metric = {
  title: string;
  firstValue: number;
  secondValue: number;
};

export type Product = {
  productId: string;
  name: string;
  price: number;
  type: string;
  image: string;
  parameters: Parameter[];
  metrics: Metric[];
};

export type ProductCategory = {
  name: string;
  sales: Product[];
};

export interface ThumbnailsPluginInstance {
  visible: boolean;
  hide: () => void;
  show: () => void;
}

export interface ProductParameterProps {
  title: string;
  value: string | number;
}

export interface ProductDetailsProps {
  activeProduct: Product;
  isPhotoOpen: boolean;
  setIsPhotoOpen: (open: boolean) => void;
  imageLoaded: boolean;
  setImageLoaded: (loaded: boolean) => void;
  handleCopyToClipboard: (text: string) => void;
  handleShowAllProductsClick: () => void;
  isTooltipVisible: boolean;
}

export interface ProgressCirclesProps {
  metrics: {
    title: string;
    firstValue: number;
    secondValue: number;
  }[];
}
