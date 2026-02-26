import { Injectable } from '@angular/core';
import type { MerchOrder, MerchOrderCreateInput, MerchProduct, Result } from './merch.models';

/**
 * MerchService
 *
 * Typed SSR-safe skeleton.
 *
 * - No direct window/document usage.
 * - No browser-only logic.
 * - Supabase integration can be added later.
 */
@Injectable({ providedIn: 'root' })
export class MerchService {
  async getActiveProducts(): Promise<Result<MerchProduct[]>> {
    return { ok: true, data: [] };
  }

  async getProductBySlug(slug: string): Promise<Result<MerchProduct | null>> {
    void slug;
    return { ok: true, data: null };
  }

  async createOrder(input: MerchOrderCreateInput): Promise<Result<MerchOrder>> {
    void input;
    return { ok: false, error: 'Not implemented.' };
  }
}

