import React,{useState,  Fragment, useRef, useEffect}  from 'react'
import { useRecoilState } from "recoil"
import { modalstate } from "../atoms/modalAtom"
import {Dialog, Transition } from  "@headlessui/react"
import "../Style/ProjectModal.css"
import { CameraIcon } from "@heroicons/react/outline";
import { HiOutlineLink } from "react-icons/hi";
import { IoAddOutline, IoExitOutline, IoOptionsOutline } from "react-icons/io5";
import {db, storage} from "../firebase"
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "@firebase/firestore"
import { ref, getDownloadURL, uploadString } from "@firebase/storage"
// HiOutlineDuplicate
function ProjectModal() {
    const [open, setopen] = useRecoilState(modalstate)
    const [selectedfile, setselectedfile] = useState(null)
    const [loading, setloading] = useState(false)   

    const filePicker = useRef(null)
    const ProjectName = useRef("")
    const projectDesc = useRef("")
    const projectWebLink = useRef("")
    const GitHubLink = useRef("")
    const Startdateref = useRef("")
    const Enddateref = useRef("")

    const addImageToPost = (e) => {
        const reader = new FileReader()
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setselectedfile(readerEvent.target.result)
        }   
    }

    const uploadPost = async() => {
        if (loading) return;

        setloading(true)
        const docRef = await addDoc(collection(db, "projects"), {
            ProjectName:ProjectName.current.value,
            ProjectDesc:projectDesc.current.value,
            ProjectWebLink:projectWebLink.current.value,
            GitHubLink:GitHubLink.current.value,
            Startdateref:Startdateref.current.value,
            Enddateref:Enddateref.current.value,
            timestamps: serverTimestamp()
        })

        const imageRef = ref(storage,`projects/${docRef.id}/image`)
        await uploadString(imageRef, selectedfile, "data_url").then(async snapshot => {
            const downloadedUrl = await getDownloadURL(imageRef)
            await  updateDoc(doc(db, "projects", docRef.id), {
                image: downloadedUrl
            })
        })

        setopen(false);
        setselectedfile(null);
        setloading(false);
    }   

    useEffect(() => {
        
    }, []);


    return (
        <Transition.Root show={open} as={Fragment} className="ProjectModal">

            <Dialog
                as="div"
                onClose={setopen}    
            >
                <div>
                    <Transition.Child
                        as="div"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-200"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay 
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition"
                        />
                    </Transition.Child>
                    <Transition.Child
                        as="div"
                        enter="ease-out duration-300 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-200  translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                    <div className="modal_box"> 
                        <div className="uploading_img">
                            <img src="https://cdn.dribbble.com/users/2667384/screenshots/8372993/media/a2f8d08130089a7b6be28a5b3cb32c3d.gif" alt="" />
                        </div>
                        {
                            selectedfile ? (
                                <div className="selected_img_display">
                                    <img src={selectedfile} alt=""  onClick={() => setselectedfile(null)} />
                                </div>
                            )   : (

                                <div className="modal_img_section" onClick={() => filePicker.current.click()}>
                                    <CameraIcon 
                                        className="icon-camera"
                                        aria-hidden="true"
                                    /> 
                                    <Dialog.Title
                                        as="h2"
                                        className="upl_foto"
                                    >
                                        Upload a Photo
                                    </Dialog.Title>
                                    <div>
                                        <input 
                                            type="file" 
                                            hidden
                                            ref={filePicker}
                                            onChange={addImageToPost}    
                                        />
                                    </div> 
                                </div>
                            )
                        }
                        

                        <div className="event_section">
                                <div className="event_name">
                                    <label>Project Name : </label>
                                    <input 
                                        type="text" placeholder="Event name"
                                        ref={ProjectName}
                                    />
                                </div>
                                <div className="event_desc">
                                    
                                    <label> <IoExitOutline className="icon"/>Project Description : </label>
                                    <textarea  
                                        cols="30" rows="5" placeholder="Project Description" 
                                        ref={projectDesc}
                                    />
                                </div>
                                <div className="event_links">
                                    <IoOptionsOutline className="icon"/>
                                    <label>Project Website Link : </label>
                                    <input  
                                        type="text" placeholder="Project link"  
                                        ref={projectWebLink}
                                    />
                                </div>
                                <div className="event_links">
                                    <HiOutlineLink className="icon"/>
                                    <label>Github Link : </label>
                                    <input  
                                        type="text" placeholder="Github link"  
                                        ref={GitHubLink}
                                    />
                                </div>
                            </div>

                        <div className="date_time">
                            <label>Start Date : </label>
                            <input 
                                type="date" name="" id="" className="date"
                                data-date-format="DD MMMM YYYY"
                                ref={Startdateref}
                            />
                           <div>
                           <label>End Date : </label>
                            <input 
                                type="date" name="" id="" className="date"
                                data-date-format="DD MMMM YYYY"
                                ref={Enddateref}
                            />
                           </div>
                        </div>

                        <div className="upload_section">
                            <button
                                type="button"
                                disabled={!selectedfile}
                                className="upload_btn"
                                onClick={uploadPost}
                            >
                                {loading ? "Uploading...." : "Upload Project"}                                      
                            </button>
                        </div>
                    </div>
                        
                        <div className="close" onClick={() => setopen(false)}>
                            <IoAddOutline className="rotate close-icon" />
                        </div>
                    </Transition.Child>
                </div>

            </Dialog>
        </Transition.Root>
    )
}

export default ProjectModal
