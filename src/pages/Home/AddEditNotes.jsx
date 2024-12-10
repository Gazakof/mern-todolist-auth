import React from "react"

const AddEditNotes = () => {
    return (
        <>
            <div>
                <div className="flex flex-col gap-2">
                    <label className="input-label">
                        Titel
                    </label>
                    <input 
                        type="text"
                        className="text-2xl text-slate-950 outline-none"
                        placeholder="Go to Gym at 5am"
                    />
                </div>
            </div>
        </>
    )
}

export default AddEditNotes