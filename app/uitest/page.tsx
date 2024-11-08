import {Sections} from '../../layouts/sections';

export default function Page() {
    return (
        <>
            <div className="bg-white flex flex-col">
                <div className="mt-20 mb-20 flex">
                    <div className="text-black"> Python Developer </div>
                    <div>
                        <button className="ui button primary">Save</button>
                    </div>
                </div>
                <Sections></Sections>
            </div>
        </>
    )
}