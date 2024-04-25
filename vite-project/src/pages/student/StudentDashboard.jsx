import Layout from "../../components/layout/Layout";
const projects = [
    {
        
        image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        tech_stack: 'jlkdkjgodg lkdsjgljds sjdkgljdklj g ',
        keywords: ' ksdjfkl, lksjdflkj ,oisdjfio ',
        student_name: 'sjdfkjdsk ksdljdflkj ',
        college_name: 'klsjdlkfj lksajdfklj sdlkjf l',
        student_email: 'kljsdkjlgfj ',
        student_contact_no: '3497857'
 
    },
]

const StudentDashboard = () => {
    return (
        <Layout>
            <div className=" container mx-auto px-4 py-5 lg:py-8">
                {/* Top  */}
                <div className="top ">
                    {/* main  */}
                    <div className=" bg-teal-50 py-5 rounded-xl border border-teal-100">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        {/* text  */}
                        <div className="">
                            <h1 className=" text-center text-lg"><span className=" font-bold">Name :</span> Kamal Nayan Upadhyay</h1>
                            <h1 className=" text-center text-lg"><span className=" font-bold">Email :</span> test@gmail.com</h1>
                        </div>
                    </div>
                </div>

                {/* bottom  */}
                <div className="bottom">
                    {/* main 1 */}
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                        {/* text  */}
                        <h2 className=" text-2xl lg:text-3xl font-bold">My Project</h2>

                        {/* main 2 */}
                        <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-teal-100 md:flex-row">
                            {/* main 3  */}
                            <div className="w-full border-r border-teal-100 bg-teal-50 md:max-w-xs">
                                {/* left  */}
                                <div className="p-8">
                                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                        <div className="mb-4">
                                            <div className="text-sm font-semibold text-black">Project ID</div>
                                            <div className="text-sm font-medium text-gray-900">#74557994327</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Date</div>
                                            <div className="text-sm font-medium text-gray-900">4 March, 2023</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Title</div>
                                            <div className="text-sm font-medium text-gray-900">Hand Painted Blue Kaushalam Tea Pot in Aluminium</div>
                                        </div>

                                        {/* <div className="mb-4">
                                            <div className="text-sm font-semibold">Description</div>
                                            <div className="text-sm font-medium text-green-800">Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.</div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* right  */}
                            <div className="flex-1">
                                <div className="p-8">
                                    <ul className="-my-7 divide-y divide-gray-200">
                                        {projects.map((projects) => (
                                            <li
                                                key={projects.id}
                                                className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                                            >
                                                <div className="flex flex-1 items-stretch">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                                                            src={projects.image}
                                                            // alt={projects.imageSrc}
                                                        />
                                                        
                                                    </div>

                                                    <div className="ml-5 flex flex-col justify-between">
                                                        <div className="flex-1">
                                                            <p className="text-sm font-bold text-gray-900">{projects.title}</p>
                                                            <p className="mt-1.5 text-sm font-medium text-gray-500">{projects.description}</p>
                                                        </div>

                                                        <p className="mt-1.5 text-sm font-medium text-gray-500">{projects.keywords}</p>
                                                        <p className="mt-1.5 text-sm font-medium text-gray-500">{projects.tech_stack}</p>
                                                        {/* <p className="mt-1.5 text-sm font-medium text-gray-500">{projects.color}</p> */}
                                                    </div>
                                                </div>

                                                <div className="ml-auto flex flex-col items-end justify-between">
                                                    {/* <p className="text-right text-sm font-bold text-gray-900">{projects.price}</p> */}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default StudentDashboard;