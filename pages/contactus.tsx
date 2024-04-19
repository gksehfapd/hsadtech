import Layout from '@/components/layout'
import { useForm } from 'react-hook-form'

export default function Contactus() {
	const { register, handleSubmit } = useForm()

	const onSubmit = (data: any) => {
		console.log(data)
	}

	return (
		<Layout>
			<div className="flex flex-col pb-8">
				<span className="text-5xl text-purple-900 pb-6">Contact us</span>
				<div className="flex flex-col text-xl">
					<span className="mb-6">
						HS Adtech의 제휴 및 퍼포먼스 등 통합 서비스를 통한 성공적인 마케팅과 최고의
						성과를 달성해 보세요!
					</span>
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
						<input
							type="text"
							placeholder="회사명"
							name="companyName"
							className="border-2 p-3 my-2 w-full"
						/>
						<input
							type="text"
							placeholder="담당자"
							name="clientName"
							className="border-2 p-3 my-2 w-full"
						/>
						<input
							type="text"
							placeholder="연락처"
							name="clientNumber"
							className="border-2 p-3 my-2 w-full"
						/>
						<input
							type="text"
							placeholder="이메일"
							name="clientEmail"
							className="border-2 p-3 my-2 w-full"
						/>
						<textarea
							placeholder="문의내용"
							name="clientText"
							className="border-2 p-2 my-2 w-full h-96"
						/>
						<input
							type="file"
							name="clientFile"
							accept="*"
							className="border-2 p-2 my-2 w-full"
						/>

						<input
							type="submit"
							value="문의하기"
							className="bg-slate-300 w-40 h-16 rounded-lg mt-8"
						/>
					</form>
				</div>
			</div>
		</Layout>
	)
}
