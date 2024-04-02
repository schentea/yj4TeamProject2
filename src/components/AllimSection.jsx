import Button from 'react-bootstrap/Button';
export default function AllimSection() {
    return (
        <div className="w-full h-screen relative bg-cover bg-center flex justify-center items-center bg-[url('https://pixabay.com/get/g99e2749571e75b6320c34147d775d74ad3bd6d8f64900ed82cfd180405f95adea2859bcb7c028692817a8c3b8cb883fa.jpg')] mt-16">
            <Button className="w-[20%] absolute bottom-36" variant="success">
                Success
            </Button>
        </div>
    );
}
