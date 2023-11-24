
import React from 'react';
import Captcha from '../component/captcha';

export default function Home() {
  return (
    <main>
      <input type='text' placeholder='Message' />
      <div>
        <Captcha />
      </div>
      <button>
        send
      </button>
    </main>
  );
}
