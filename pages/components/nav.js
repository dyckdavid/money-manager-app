
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <ul>
        <li><Link class="active" href="/">Home</Link></li>
        <li><Link href="/listing">Listing</Link></li>
      </ul>
    </div>
  )
}
