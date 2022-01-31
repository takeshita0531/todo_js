import { useRouter } from 'next/router';
import Index from '../components/Index'
import Link from 'next/Link'

  export default function Blog() {
    return (

        <li>
      <Link href="/tasks/[id]" as={`/tasks/${2}`}>
        <a>aaa</a>
      </Link>
    </li>
    );
  }