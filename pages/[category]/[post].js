import Layout from '@/.current_theme/Layout';
import { useRouter } from 'next/router';

export default function Post() {
	const { query } = useRouter();

	return (
		<Layout>
			This is post page: {JSON.stringify(query)}
		</Layout>
	)
}
