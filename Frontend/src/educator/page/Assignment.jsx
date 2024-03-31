import React, { useState } from 'react'
import Img from '../../assets/educator.png'
// import { NavLink } from 'react-router-dom'
function TestSeries() {
  const [assignmentForm,setAssignmentForm] = useState(false);
  const [AssignTitle,setAssignTitle] = useState();
  const [AssignDeadline,setAssignDeadline] = useState();
  const [Assignproblems,setAssignProblem] = useState()
  const [problemTypes,setTypes] = useState()
  const testResults = [
    {
      id: 1,
      testType: ""
    }
  ]
  const EdAssignment = [
    {
      id: 1,
      testTitle: "Physics Assignment",
      deadline: 30,
      problems: 21,
      questionType: "MCQ's",
      New: true,

    },
   
  ]
  const [edAssignment,setedAssignment] = useState([...EdAssignment])

  const HandleEdTest = ()=>{

    setedAssignment((prev)=>([...prev,{ id:Date.now(),testTitle:AssignTitle,deadline:AssignDeadline ,problems:Assignproblems,questionType:problemTypes,New:true}]))
    setAssignmentForm(false)
    setAssignDeadline("");
    setAssignProblem("");
    setTypes("");
    setAssignTitle("");

   
  }
  return (
    <div className='  p-2  py-10 lg:space-y-2'>
      {/* <div className="Test result">
        <div className="">
          <span className=' text-3xl font-semibold text-slate-500'>Test Results:</span>
          <div className=" p-1">

            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={Img} alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div className="">
                  <button className=' bg-blue-700  text-white rounded-xl p-2 px-4'>Check Out The results</button>
                </div>
              </div>
            </a>

          </div>

        </div>

      </div> */}

      <div className="Add a test">
        <div className=" space-y-4">
          <span className=' text-3xl font-semibold text-slate-500  '>New Assignment:</span>
          <div className=" h-60 border flex items-center justify-center">
            <button onClick={()=>{setAssignmentForm(true)}} className='text-[5rem] border h-32 w-32 flex items-center justify-center rounded-full bg-gray-400 text-white '>+</button>
          </div>

        </div>
        <div className={` ${assignmentForm?"":"hidden"}   flex items-center justify-center absolute z-[4]  w-full left-0 h-screen top-0 bg-[#403f3fcf] `}>
       <div className=" bg-white py-4 justify-between flex-col flex lg:w-[40vw] h-[50vh]">
       <div className="flex items-center justify-center border-b-4  ">
           <span className=' text-2xl font-bold text-gray-500  '> New Assignment</span>
           {/* <div className="">X</div> */}
          </div>
          <div className="px-4 space-y-4">
            <div className="testTitle space-x-2 items-center flex justify-between">
              <label htmlFor=" " className=' text-[23px] font-semibold '>Assignment Title:</label>
              <select name=""  onChange={(e)=>{
                setAssignTitle(e.target.value)
              }} value={AssignTitle} className=' w-[50%] p-1 outline-none focus:outline-none ' id=" SelectTitle">
                <option value="">select Title</option>
                <option value="Chemistry Assignment">Chemistry Assignment </option>
                <option value="Physics Assignment">Physics Assignment </option>
                <option value="Maths Assignment">Maths Assignment </option>
              </select>
              
              
              
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="">Assignment Deadline</label>
              <input onChange={(e)=>{setAssignDeadline(e.target.value)}} value={AssignDeadline} type="date" className=' w-[50%] outline-none p-1' placeholder='...Time' name="" id="" />
            </div>
            <div className="flex justify-between  items-center">
              <label htmlFor="">No of Questions</label>
              <input onChange={(e)=>{setAssignProblem(e.target.value)}} value={Assignproblems} type="number" className=' w-[50%] outline-none p-1' placeholder='...type here' name="" id="" />
            </div>
            <div className=" flex justify-between items-center">
              <label  htmlFor="">Questions Type</label>
              <select onChange={(e)=>{setTypes(e.target.value) }} value={problemTypes} name=" " className='p-1 w-[50%]' id="">
                <option value="">select</option>
                <option value="MCQs">MCQs</option>
                <option value="Fill in">Fill in </option>
                <option value="Subjective">Subjective</option>
                <option value="Numerical">Numerical</option>
                <option value="Mixed">Mixed</option>
              </select>

            </div>


          </div>
          <div className=" flex items-center space-x-2 justify-center">
            <button onClick={HandleEdTest} className=" border px-2 hover:bg-gray-900  bg-gray-700 transition-all duration-300 text-white rounded-lg p-1">Create Assignment</button>
            <button onClick={()=>{ setAssignmentForm(false)}} className='  border px-2 bg-red-500 hover:bg-red-600 transition-all duration-300  text-white rounded-lg p-1'>Cancel</button>
          </div>
       </div>
          

        </div>

      </div>
      <div className="Your All tests ">
        <div className=" lg:space-y-4">
          <span className=' text-3xl font-semibold text-slate-500'>Your All Assignment:</span>
          <div className=" grid  lg:grid-cols-2 gap-y-6 ">


            {edAssignment.map((element) => (
            <div key={element.id} class="max-w-sm relative   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src={Img} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {element.testTitle}
                  </h5>
                </a>
                <p class="mb-3 font-normal flex flex-col text-gray-700 dark:text-gray-400">
                  <span> Total number of problem: {element.problems}</span>
                  <span> Deadline: {element.deadline}</span>
                  <span> {element.questionType} type</span>

                </p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
                <div className=" bg-red-600 absolute right-0 top-0 text-white px-2 rounded-lg "> {element.New?"new":"ended"} </div>
              </div>
            </div>))

            }


          </div>

        </div>

      </div>

    </div>
  )
}

export default TestSeries
