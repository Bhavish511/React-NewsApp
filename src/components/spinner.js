import loading from './loading.gif'
const spinner = () => {
    return (
      <div className='text-center'>
        <img src={loading} className='my-5' alt="Loading..." />
      </div>
    )
}
export default spinner