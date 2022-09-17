import { useRouter } from 'next/router';
export default function AdoptionPage() {
  const router = useRouter();
  return <h1>Adoption form for {router.query.id}</h1>;
}
