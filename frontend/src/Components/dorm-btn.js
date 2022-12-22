import React from 'react';

import './css/btn.css';
import {ReactComponent as Button} from './img/arrow-right.svg';

function DormButton (){
    return (
		<div class="btn-container">
			<a href="/dorms">
				<button class="dorm-btn">
					<span class="text">Browse Dorms</span>
					<div class="icon-container">
						<div class="icon icon--left">
							<Button/>❯
						</div>
						<div class="icon icon--right">
							<Button/>❯
						</div>
					</div>
				</button>
			</a>
		</div>
    )
}

export default DormButton;




