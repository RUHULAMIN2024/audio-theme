import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBorderCSS, getBoxCSS, getColorsCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id, device }) => {
const { alignment, styles } = attributes;
  const { container,content } = styles;
  const { textAlign,title, artist, statusIndicator, playBg } = content;	

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .audio-player`;
	const titleSL = `${blockSl} .track-title`;
	const artistSL = `${blockSl} .artist-name`;
	const statusIndicatorSL = `${blockSl} .status-indicator`;
	const playBtn= `${blockSl} .play-btn`;

console.log(blockSl, titleSL, artistSL)

	return <style dangerouslySetInnerHTML={{
		__html: `


   		${getTypoCSS("", title.typo).googleFontLink} 
   		${getTypoCSS("", artist.typo).googleFontLink} 
		  

        ${getTypoCSS(titleSL, title.typo).styles} 
        ${getTypoCSS(artistSL, artist.typo).styles} 
          
		
		
		${blockSl} {
			${getBackgroundCSS(container?.bg)};
		    ${getBorderCSS(container?.border)};
			padding:${getBoxCSS(container?.padding?.desktop)};
	    	margin:${getBoxCSS(container?.margin?.desktop)};
			border-radius:${getBoxCSS(container?.radius)};
		 	text-align: ${textAlign}
		}

		 ${titleSL}{
		    color:${title?.color};
			margin:${getBoxCSS(title?.margin?.desktop)};
		}
		 ${artistSL}{
		    color:${artist?.color};
			margin:${getBoxCSS(artist?.margin?.desktop)};
		}

		 ${statusIndicatorSL}{
		 	width: ${statusIndicator?.width};
		 	height: ${statusIndicator?.height};
		    ${getColorsCSS(statusIndicator?.colors)};
		    ${getBorderCSS(statusIndicator?.border)};
			padding:${getBoxCSS(statusIndicator?.padding?.desktop)};
			border-radius:${getBoxCSS(statusIndicator?.radius)};

		}
		 ${playBtn}{
		 	${getBackgroundCSS(playBg)};


		}
        
		

		  


	${tabBreakpoint} {
        	${blockSl}{
				padding:${getBoxCSS(container?.padding?.tablet)};
	    		margin:${getBoxCSS(container?.margin?.tablet)};

		   }

			${titleSL}{
				margin:${getBoxCSS(title?.margin?.tablet)};
			}
			${artistSL}{
				margin:${getBoxCSS(artist?.margin?.tablet)};
			}
		
         
		   
	 	};



        ${mobileBreakpoint}{

        	${blockSl} {
				padding:${getBoxCSS(container?.padding?.mobile)};
	    		margin:${getBoxCSS(container?.margin?.mobile)};

			}
		
		

			${titleSL}{
				margin:${getBoxCSS(title?.margin?.mobile)};
			}
			${artistSL}{
				margin:${getBoxCSS(artist?.margin?.mobile)};
			}

		};





		

	`}} />;
}
export default Style;