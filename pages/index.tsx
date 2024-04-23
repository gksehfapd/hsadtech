import Layout from '@/components/layout'
import IndexComponent from '@/components/pageComponents/indexComponent'

export default function Home() {
	return (
		<Layout className="flex justify-around max-md:flex-col">
			<IndexComponent />
		</Layout>
	)
}
