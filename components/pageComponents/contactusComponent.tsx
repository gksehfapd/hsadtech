import { useForm } from 'react-hook-form'
import KakaoMap from '../map'

const ContactusComponent = () => {
	const { register, handleSubmit } = useForm()

	const onSubmit = (data: any) => {
		console.log(data)
	}

	return (
		<div className="flex flex-col pb-8">
			<span className="text-5xl text-purple-900 pb-6">Contact us</span>
			<div className="flex flex-col text-xl pb-20">
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

			<div className="w-full h-96 flex  max-md:flex-col">
				<div className="w-4/5 h-96 max-md:w-full max-md:h-72">
					<KakaoMap />
				</div>
				<div className="w-1/5 p-6 bg-zinc-700 justify-center items-center text-white text-base flex max-md:h-32 max-md:w-full max-md:p-0">
					<ul className="float-none flex flex-col items-center h-full justify-around py-10 max-md:py-2 max-md:text-sm max-md:items-start">
						<li className="py-1 max-md:py-0 w-full">
							<span className="flex items-center">
								<span className="material-icons mr-2">near_me</span>
								서울특별시 성동구 상원1길 25 SOL빌딩 4층
							</span>
						</li>
						<li className="py-1 w-full">
							<span className="flex items-center">
								<span className="material-icons mr-2">phone</span>
								<div className="flex flex-col">
									<span>TEL : 02-462-2384</span> <span> FAX : 0504-001-2384</span>
								</div>
							</span>
						</li>
						<li className="py-1 w-full">
							<span className="flex items-center">
								<span className="material-icons mr-2">mail</span>{' '}
								hsadtech@hsadtech.com
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ContactusComponent
