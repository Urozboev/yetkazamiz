import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../actions/products'

function AddProduct() {
    const inpName = useRef()
    const inpImg = useRef()
    const inpBg = useRef()
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addProduct({
            name: inpName.current.value,
            imgName: inpImg.current.value,
            bg: inpBg.current.value,
        }));

        formRef.current.reset()
    }
    return (
        <section className='p-5'>
            <form action="" onSubmit={handleSubmit} ref={formRef}>
                <input ref={inpName} type="text" className='form-control mb-3' placeholder='name' />
                <input ref={inpImg} type="text" className='form-control mb-3' placeholder='img-path' />
                <input ref={inpBg} type="text" className='form-control mb-3' placeholder='bg-color' />
                <button className='form-control'>Add Product</button>
            </form>
        </section>
    )
}

export default AddProduct