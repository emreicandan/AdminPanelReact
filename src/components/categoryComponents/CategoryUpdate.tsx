import React, { useState } from 'react'
import { updateCategory } from '../../services/CategoryService';
import { useAppDispatch } from '../../store/hooks';
import { UpdateCategoryDto } from '../../dtos/UpdateCategoryDto';

function CategoryUpdate() {
    const [category, setCategory] = useState<UpdateCategoryDto>(
        {
            id: "",
            name: ""
        });
    const dispatch = useAppDispatch();

    const setCategoryData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(updateCategory(category));
        setCategory({
            id: "",
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
                                <label className="form-label">Id</label>
                                <input type="text" name='id' className="form-control" onChange={setCategoryData} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Category Name</label>
                                <input type="text" name='name' className="form-control" onChange={setCategoryData} />
                            </div>
                            <button type="submit" className="btn btn-warning mt-2">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryUpdate
