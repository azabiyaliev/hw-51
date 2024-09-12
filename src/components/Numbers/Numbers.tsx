import './Numbers.css';

interface Numbers {
    number: number;
}

const Numbers: React.FC <Numbers> = ({number}) => {
    return (
        <div className='numbers'>
            <div className='numbers_item'>
                {number}
            </div>
        </div>
    );
};

export default Numbers;