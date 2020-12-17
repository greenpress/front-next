import Layout from '@/.current_theme/Layout';
import { useRouter } from 'next/router';

export default function Search() {
	const { query } = useRouter();
	return (
		<Layout>
			This is search page: {JSON.stringify(query)}
		</Layout>
	)
}
