import { useNavigate } from "react-router";


// projectData 
const projectData = [
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

const HomePageprojectCard = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Projects</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {projectData.map((item, index) => {
                            const { image, title } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                            onClick={()=> navigate('/prodjectinfo')}
                                                className="lg:h-80  h-96 w-full"
                                                src={image}
                                                alt="blog"
                                            />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                Campus-Innovations
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1> */}

                                            <div className="flex justify-center ">
                                                <button className=" bg-teal-500 hover:bg-teal-900 w-full text-white py-[4px] rounded-lg font-bold"
                                                onClick={()=> navigate('/projectinfo')}>
                                                    Explore
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageprojectCard;