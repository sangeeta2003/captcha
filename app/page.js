import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <input type='text' placeholder='Message'/>
      <div>captcha</div>
      <button>
        send
      </button>
      
    </main>
  )
}
