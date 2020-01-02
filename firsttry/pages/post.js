import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';
const Page = () => {
    const router = useRouter();
    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p>this is page content</p>
        </Layout>
    )
}
export default Page;