import Layout from '@/components/layout'
import AboutusComponent from '@/components/pageComponents/aboutusComponent'
import AffliateComponent from '@/components/pageComponents/affliateComponent.tsx'
import ContactusComponent from '@/components/pageComponents/contactusComponent'
import CustomerComponent from '@/components/pageComponents/customerComponent.tsx copy'
import IndexComponent from '@/components/pageComponents/indexComponent'

export default function Home() {
	return (
		<Layout className="flex justify-around flex-col p-20">
			<IndexComponent />
			<AboutusComponent />
			<AffliateComponent />
			<CustomerComponent />
			<ContactusComponent />
		</Layout>
	)
}
