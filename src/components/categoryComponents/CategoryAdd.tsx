import React, { ChangeEvent, useState } from 'react'
import { AddCategoryDto } from '../../dtos/AddCategoryDto';
import { useAppDispatch } from '../../store/hooks';
import { addCategory } from '../../services/CategoryService';

function CategoryAdd() {
    const [category, setCategory] = useState<AddCategoryDto>(
        {
            name: ""
        });
    const dispatch = useAppDispatch();

    const setCategoryData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addCategory(category));
        setCategory({
            name: ""
        })
    }

    return (
        <div>
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Category Name</label>
                                <input type="text" name='name' className="form-control" onChange={setCategoryData} />
                            </div>
                            <button type="submit" className="btn btn-primary mt-2">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryAdd
