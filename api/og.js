import React from 'react';
import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

const e = React.createElement;

export default async function handler() {
  const blue = '#168cff';
  const lightBlue = '#42a5ff';
  const white = '#f5f8fc';
  const muted = '#a4b0c1';

  return new ImageResponse(
    e(
      'div',
      {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '64px 78px',
          color: white,
          background: 'linear-gradient(115deg, #050811 0%, #07101d 58%, #08182b 100%)',
          fontFamily: 'Arial, Helvetica, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        },
      },
      e('div', {
        style: {
          position: 'absolute',
          inset: 0,
          opacity: 0.16,
          backgroundImage: 'linear-gradient(rgba(66,165,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(66,165,255,.22) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        },
      }),
      e('div', {
        style: {
          position: 'absolute',
          width: 560,
          height: 560,
          borderRadius: 999,
          left: -120,
          top: 35,
          background: 'radial-gradient(circle, rgba(22,140,255,.20) 0%, rgba(22,140,255,0) 68%)',
        },
      }),
      e(
        'div',
        {
          style: {
            width: 380,
            height: 380,
            borderRadius: 999,
            border: `3px solid ${blue}`,
            background: 'rgba(5,9,16,.82)',
            boxShadow: '0 0 60px rgba(22,140,255,.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            flexShrink: 0,
          },
        },
        e('div', { style: { fontSize: 174, fontWeight: 800, letterSpacing: '-22px', paddingRight: 22 } },
          e('span', { style: { color: white } }, 'c'),
          e('span', { style: { color: blue } }, 'j')
        ),
        e('div', {
          style: {
            position: 'absolute',
            fontSize: 25,
            color: lightBlue,
            fontWeight: 800,
            top: 174,
            left: 174,
          },
        }, '</>')
      ),
      e(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 76,
            maxWidth: 610,
            position: 'relative',
          },
        },
        e('div', { style: { display: 'flex', alignItems: 'baseline', fontSize: 76, fontWeight: 800, letterSpacing: '-4px' } },
          e('span', null, 'cerjo'),
          e('span', { style: { color: blue } }, '.dev')
        ),
        e('div', { style: { marginTop: 8, fontSize: 25, fontWeight: 700, color: lightBlue, letterSpacing: '7px', textTransform: 'uppercase' } }, 'Desenvolvimento Web'),
        e('div', { style: { marginTop: 30, width: 170, height: 4, background: blue, borderRadius: 99 } }),
        e('div', { style: { marginTop: 30, fontSize: 30, lineHeight: 1.35, color: muted, maxWidth: 580 } }, 'Sites, landing pages e sistemas web para negócios e profissionais.'),
        e('div', { style: { marginTop: 35, fontSize: 21, color: '#7890aa', letterSpacing: '2px' } }, 'https://cerjo.dev')
      ),
      e('div', {
        style: {
          position: 'absolute',
          right: -70,
          bottom: -105,
          width: 290,
          height: 290,
          border: `2px solid ${blue}`,
          transform: 'rotate(45deg)',
          opacity: 0.42,
        },
      })
    ),
    { width: 1200, height: 630 },
  );
}
