import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <input type='text' placeholder='Message'/>
      <div>captcha</div>
      <button>
        send
      </button>
      
    </div>
  )
}
