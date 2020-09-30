const SENTENCE_REGEX = /([A-Z]+)*([A-Z][a-z])/g;
const WORD_REGEX = /[A-Z]/g;
const SNAKE_CASE_REGEX = /[.\-_\s]/g;

export const formatID = ( id ) => id.toLowerCase().split(' ').join('-');

export const formatRowStyle =  ( rowCount ) => { 
    return Array.from( { length: rowCount }, (_) => 'auto' ).join(' ')
}

export const formatPlurality = ( str, count ) =>{
    return  count > 1 ? str : str.split( 'IES' ).join('Y');
}

export const toSentenceCase = ( str ) =>{ 
    return str.replace(SENTENCE_REGEX, `$1 $2`).toLowerCase();
}

export const toSnakeCase = str => str.replace( WORD_REGEX , letter => `_${letter.toLowerCase()}`);


export const toCamelCase = ( str )=> { 
    return str.toLowerCase().trim().split( SNAKE_CASE_REGEX )
        .reduce( ( string, word ) => ( 
            string + word[0].toUpperCase() + word.slice(1)
        )
    )
}

export const keysToSnakeCase = ( object ) => {
    return Object.keys(object).reduce( ( acc, c ) => {
        acc[toSnakeCase(c)] = object[c]
        return acc;
    }, {})
}

export const regulateIntervalSpeed = ( countRemaining ) => {
    if ( countRemaining < 10 )  return [ 1, 175 ];
    if ( countRemaining < 20 )  return [ 2, 50 ];
    if ( countRemaining < 100 ) return [ 4, 25 ];
    if ( countRemaining < 200 ) return [ 6, 5 ];
    if ( countRemaining < 300 ) return [ 8, 1 ];
    if ( countRemaining < 400 ) return [ 10, 0.5 ];
    
    return [ 100, 0.1 ];

}

export const checkScrolled = ( ref, scrollOn = 0.25) => {
    if ( ref ) {
        const { height, top } = ref.getBoundingClientRect();
        const scrollPercentage = -( height * scrollOn );
    
        if ( top <= scrollPercentage ) {
            return true
        }
    }

    return false;
}