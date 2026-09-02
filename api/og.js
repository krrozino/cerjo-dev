import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const imagePath = fileURLToPath(new URL('../og-image.jpg', import.meta.url));

export default function handler(_request, response) {
  const encoded = readFileSync(imagePath, 'utf8').trim();
  const image = Buffer.from(encoded, 'base64');

  response.setHeader('Content-Type', 'image/jpeg');
  response.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');
  response.status(200).send(image);
}
