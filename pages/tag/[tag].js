import Layout from '@/.current_theme/Layout';
import { useRouter } from 'next/router';

export default function Tag() {
	const { query } = useRouter();
	return (
		<Layout>
			This is tag page: {JSON.stringify(query)}
		</Layout>
	)
}
