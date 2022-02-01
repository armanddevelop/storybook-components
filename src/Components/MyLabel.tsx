import "./MyLabel.css";

export interface MylabelProps{
  /**
    * Title of the label component will show
   */
  label:string,
  /**
    * This is the default size of the label
   */
  size:'normal'|'h1'|'h2'|'h3',
  /**
    * Flag to active uppercase message
   */
  allCaps?:boolean,
  /**
    * Color of the message
   */
  color?:'primary'| 'secondary'|'tertiary',
  /**
    * Color of the font
   */
  fontColor?:string

}
/**
 * My label UI component for user interaction
 */
export const MyLabel = ({
  label='no label',
  size='normal',
  allCaps = false,
  color = 'primary',
  fontColor=""
}:MylabelProps) => {

  return <span
          className={`label ${ size } text-${color}`}
          style={{color:`${fontColor}`}}
          >
          { allCaps ? label.toUpperCase() : label}
        </span>
};
