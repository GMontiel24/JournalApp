import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(http://www.natureimagesawards.com/wp-content/uploads/2019/05/archway-in-a-pod.jpg)'
                }}>
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Por siempre en mi corazon papi.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div >
    )
}
