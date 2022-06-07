function FlappySkeleton(props) {
  const width = 65.661 * 1.5;
  const height = 46.478 * 2;

  const { body, wing1, wing2 } = props;

  //wing1 = F2F2F2; wing2 = DDD3D3; body = F5C743;
  return (
    <svg id="FlappySVG" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 65.661 46.478">
      {/* animate the svg up and down with a keyframe animation to make it look like it's flying  */}
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0 0; 0 -10; 0 0"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0.5s"
        keyTimes="0; 0.5; 1.0"
        keySplines="0.2 0.2 0.4 0.8; 0.2 0.6 0.4 0.8"
        calcMode="spline"
      />
      <g id="Group_9" data-name="Group 9" transform="translate(-532.812 -329.522)">
        <path
          id="Path_58"
          data-name="Path 58"
          d="M761.107,410.3H764.7v-4.088h3.634l.407,4.088h3.989l-.127,3.67,3.86.146V425.8l-11.5.117L764.7,421.8h-3.592Z"
          transform="translate(-189.626 -73)"
          fill="#eb9a9a"
          opacity="0.498"
        />
        <g id="generated" transform="translate(502.812 329.522)">
          <path
            id="Path_1"
            data-name="Path 1"
            d="M282.606-410.028v1.972H275v3.972l3.746-.085,3.718-.085.085-1.915.085-1.887H298.1v3.944h-3.944l.056,5.69.085,5.718,1.915.085,1.887.085v3.634l1.831.137,2.081.089-.142-2.056-.1-2H298.1v-11.385h3.634l.085-1.915.085-1.887,1.887-.085,1.887-.084.085,1.915.085,1.915,1.915.085,1.887.085v3.634h3.944v-3.662h-3.944v-3.944H305.7V-412h-23.1Z"
            transform="translate(-229.507 412)"
          />
          <path
            id="Path_2"
            data-name="Path 2"
            d="M231.493-382.113l-.085,1.915-3.859.085-3.887.085v3.634H220v11.549h3.662v-11.549h15.493v-3.634l-1.887-.085-1.915-.085-.085-1.915L235.183-384h-3.606Z"
            transform="translate(-190 391.887)"
          />
          <path id="Path_3" data-name="Path 3" d="M383.984-366.282l.085,3.746,1.915.085,1.887.085V-370H383.9Z" transform="translate(-307.731 381.831)" />
          <path
            id="Path_4"
            data-name="Path 4"
            d="M382.493-364.31l-.085,5.718-5.69.085-5.718.056v3.662h19.155v-3.634l-1.887-.085-1.915-.085-.085-5.718-.056-5.69h-3.662Z"
            transform="translate(-298.465 381.831)"
          />
          <path
            id="Path_5"
            data-name="Path 5"
            d="M288.182-356.532a7.363,7.363,0,0,0-.056,1.915l.085,1.521,1.915.085,1.887.085v7.606l1.915-.085,1.887-.084v-7.324l-1.887-.085-1.887-.085-.085-1.887-.085-1.887-1.775-.085C288.773-356.9,288.294-356.814,288.182-356.532Z"
            transform="translate(-238.914 372.391)"
          />
          <path
            id="Path_6"
            data-name="Path 6"
            d="M233.182-315.532a7.363,7.363,0,0,0-.056,1.915l.085,1.521,1.887.085,1.887.085.085,1.887.085,1.887,3.887.085,3.859.085v3.634h3.662v-7.606h3.972l-.085-1.915-.085-1.887H248.7l-.085,1.887-.085,1.915H237.041l-.085-1.915-.085-1.887-1.775-.085C233.773-315.9,233.294-315.814,233.182-315.532Z"
            transform="translate(-199.407 342.94)"
          />
          <path
            id="Path_7"
            data-name="Path 7"
            d="M347.069-315.744a6.154,6.154,0,0,0-.2,2v1.775H342.9l.085,1.887.085,1.915,1.915.085,1.887.085v3.634h3.8l.056-1.211c.113-2.338.028-2.451-2.028-2.451h-1.831v-3.944H348.7a3.917,3.917,0,0,0,1.859-.225c0-.113.056-.958.056-1.887l.056-1.69-1.69-.085A5.075,5.075,0,0,0,347.069-315.744Z"
            transform="translate(-278.281 342.955)"
          />
          <path
            id="Path_8"
            data-name="Path 8"
            d="M390.352-315.744a6.154,6.154,0,0,0-.2,2v1.775H371v3.944l7.69.056,7.662.085v3.662l-7.662.084-7.69.056v3.662h19.155v-11.549h3.972l-.085-1.915-.085-1.887-1.69-.085A5.075,5.075,0,0,0,390.352-315.744Z"
            transform="translate(-298.465 342.955)"
          />
          <path id="Path_9" data-name="Path 9" d="M288-272.169v1.831h7.887v3.944H311.1v-3.944H295.887V-274H288Z" transform="translate(-238.845 312.873)" />
        </g>
        <path
          id="Path_59"
          data-name="Path 59"
          d="M726.226,418.155h15.409v3.668H745.4v4.836h-3.763v2.974l-11.657.187v-3.161h-3.752Z"
          transform="translate(-189.626 -73)"
          fill={wing1 || "#F2F2F2"}
        />
        <g id="Group_8" data-name="Group 8" transform="translate(26 -103)">
          <path id="Path_35" data-name="Path 35" d="M726.226,426.724v3.016h3.716v-3.016Z" transform="translate(-215.626 30)" fill={wing2 || "#DDD3D3"} />
          <path id="Path_36" data-name="Path 36" d="M729.943,429.82h11.784l-.177,3.68h-11.5Z" transform="translate(-215.626 30)" fill={wing2 || "#DDD3D3"} />
          <path id="Path_37" data-name="Path 37" d="M741.726,426.681h3.787V429.7h-3.787Z" transform="translate(-215.626 30)" fill={wing2 || "#DDD3D3"} />
        </g>
        <path
          id="Path_57"
          data-name="Path 57"
          d="M737.713,410.473l7.606-.349.154-3.7,15.633-.022v4.075h-3.84l.015,11.3,3.836.141v3.738l3.888.224v3.809l-3.8.089-.092,3.9H745.594l-.275-3.986,3.992-.411v-6.965l-3.992-.4v-3.787h-4.086v-3.791h-3.52Z"
          transform="translate(-189.626 -73)"
          fill={body || "#F5C743"}
        />
        <path
          id="Path_60"
          data-name="Path 60"
          d="M764.824,441.426l15.792-.189v-3.786h-15.6v-3.837l19.12.005v-4.3l-19.319.14L764,433.376h-3.006l-.18,4.075,3.7.653Z"
          transform="translate(-189.626 -73)"
          fill="#d26a2d"
        />
        <path
          id="Path_61"
          data-name="Path 61"
          d="M741.726,433.5l15.4.207.1,3.658,3.745.115v3.708h4v3.849l-15.5.01v-3.629l-7.9-.008Z"
          transform="translate(-189.626 -73)"
          fill={body || "#F5C743"}
          opacity="0.716"
        />
      </g>
    </svg>
  );
}

export default FlappySkeleton;
