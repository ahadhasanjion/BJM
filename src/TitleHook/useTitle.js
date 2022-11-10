import  { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title= `${title} - service-provider`;
    }, [title])
};

export default useTitle;