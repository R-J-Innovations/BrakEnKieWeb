export type MerchProduct = {
  id: string;
  name: string;
  slug: string;
  description: string;
  priceDisplay: string;
  imageUrl: string;
  isActive: boolean;
  createdAt: string;
};

export type MerchOrderCreateInput = {
  productId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  quantity: number;
  notes?: string;
};

export type MerchOrder = {
  id: string;
  productId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  quantity: number;
  notes: string | null;
  status: 'pending' | string;
  createdAt: string;
};

export type Result<T> = { ok: true; data: T } | { ok: false; error: string };

