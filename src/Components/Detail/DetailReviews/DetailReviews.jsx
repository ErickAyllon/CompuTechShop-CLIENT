import React from 'react'
import styles from './DetailReviews.module.css'
import { Rating } from '@mui/material'

function DetailReviews({comment, user, calification}) {
  return (
    <div>
        <div>Comment: {comment}</div>
        <div>User: {user}</div>
        <div>
            Rating:
            <Rating
                    className={styles.productDetailRating}
                    name="half-rating-read"
                    size="small"
                    defaultValue={calification}
                    precision={0.5}
                    readOnly
            />
        </div>
    </div>
  )
}

export default DetailReviews