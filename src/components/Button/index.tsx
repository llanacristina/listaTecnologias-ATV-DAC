import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
  } from 'react-native';
  
  import {style} from './style';
  
  interface Props extends TouchableOpacityProps{
    title:string;
  }
  export function Button({title, ...rest}:Props){
    const backgroundColorButton = title ==='+'? '#31CF67': '#E23C44';
    
    return (
       <TouchableOpacity style={[style.button,{backgroundColor:backgroundColorButton}]} {...rest}>
            <Text style={style.textButton}>{title}</Text>
        </TouchableOpacity>
    )
  }