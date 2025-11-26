/**
 * Payload CMS client utilities.
 *
 * @module lib/payload
 */

import configPromise from '@payload-config';
import { getPayload as getPayloadClient } from 'payload';

/**
 * Gets the Payload CMS client instance.
 *
 * Use this in Server Components to fetch data from Payload.
 *
 * @returns Promise resolving to the Payload client.
 *
 * @example
 * ```tsx
 * const payload = await getPayload();
 * const articles = await payload.find({ collection: 'articles' });
 * ```
 */
export const getPayload = async () => {
	return getPayloadClient({ config: configPromise });
};
