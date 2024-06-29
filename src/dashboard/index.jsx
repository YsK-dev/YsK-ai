import React, { useEffect, useState } from 'react';
import AddResume from './components/AddResume';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {
    const { user } = useUser();
    const [resumeList, setResumeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            GetResumesList();
        }
    }, [user]);

    /**
     * Used to Get Users Resume List
     */
    const GetResumesList = async () => {
        setLoading(true);
        setError(null);
        try {
            const resp = await GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress);
            console.log(resp.data.data);
            setResumeList(resp.data.data || []);
        } catch (err) {
            console.error('Failed to fetch resumes', err);
            setError('Failed to fetch resumes');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='p-10 md:px-20 lg:px-32'>
            <h2 className='font-bold text-3xl'>My Resume</h2>
            <p>Start Creating AI resume to your next Job role</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
                <AddResume />
                {loading ? (
                    [1, 2, 3, 4].map((item, index) => (
                        <div key={index} className='h-[280px] rounded-lg bg-slate-200 animate-pulse'></div>
                    ))
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    Array.isArray(resumeList) && resumeList.length > 0 ? (
                        resumeList.map((resume, index) => (
                            <ResumeCardItem resume={resume} key={index} refreshData={GetResumesList} />
                        ))
                    ) : (
                        <p>No resumes found</p>
                    )
                )}
            </div>
        </div>
    );
}

export default Dashboard;
