import React, { useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [state, setState] = useState({})
    // console.log(state);
    const [data, setData] = useState([])
    // console.log(data);

    const handleClick = (val) => {
        setShow(val);
    }

    const inputHandler = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault()
        setData([...data, state])
    }



    const tableData = show == 'active' ? data.filter(item => item.status == 'active' || item.status == 'Active') :
        show == 'completed' ? data.filter(item => item.status == 'completed' || item.status == 'Completed') :
            [...data.filter(item => item.status == 'active' || item.status == 'Active'),
            ...data.filter(item => item.status == 'completed' || item.status == 'Completed'),
            ...data.filter(item => item.status != 'completed' || item.status != 'Completed' && item.status == 'active' || item.status == 'Active')];
    // console.log(tableData);


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name" onChange={inputHandler} />
                        </div>
                        <div className="col-auto">
                            <input type="text" name='status' className="form-control" placeholder="Status" onChange={inputHandler} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            {tableData.map((item, i) =>
                                <tr key={i}>
                                    <th scope="col">{item.name}</th>
                                    <th scope="col">{item.status}</th>
                                </tr>)}
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;