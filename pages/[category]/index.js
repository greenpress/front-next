import Layout from '@/.current_theme/Layout';
import { useRouter } from 'next/router';

export default function Category() {
	const { query } = useRouter();
	return (
		<Layout>
			This is category page: {JSON.stringify(query)}
		</Layout>
	)
}
