const ProjectDetail = () => {
    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                {/* text  */}
                <h1 className=" text-xl text-teal-300 font-bold">All Projects</h1>
                {/* Add Product Button  */}
                {/* <button className="px-5 py-2 bg-teal-50 border border-teal-100 rounded-lg">Add Product</button> */}
            </div>

            {/* table  */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-teal-100 text-teal-400" >
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-teal-100 text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-teal-100 text-slate-700 bg-slate-100">Student Name</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-teal-100 text-slate-700 bg-slate-100">Student College ID</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-teal-100 text-slate-700 bg-slate-100">Action</th>
                        </tr>
                        <tr className="text-teal-300">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-teal-100 stroke-slate-500 text-slate-500 ">
                                1.
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-teal-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                {'dfsdf'}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-teal-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
                                Edit
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-teal-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
                                Delete
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProjectDetail;