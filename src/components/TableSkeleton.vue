<template>
  <table class="tg">
    <tr>
      <th>
        <div class="line"></div>
      </th>
      <th>
        <div class="line"></div>
      </th>
      <th>
        <div class="line"></div>
      </th>
      <th>
        <div class="line"></div>
      </th>
      <th>
        <div class="line"></div>
      </th>
      <th>
        <div class="line"></div>
      </th>
      <th>
        <div class="line"></div>
      </th>
      <th>
        <div class="line"></div>
      </th>
    </tr>
    <tr>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
      <td>
        <div class="line"></div>
      </td>
    </tr>
  </table>
</template>

<style scoped>


.tg {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

.tg td {
  font-family: Arial, sans-serif;
  font-size: 14px;
  padding: 10px 5px;
  border-style: solid;
  border-width: 0px;
  overflow: hidden;
  word-break: normal;
  border-color: var(--skeletonBorderColor);
  color: var(--skeletoneTextColor);
  background-color: var(--white-color);
}

.tg th {
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  padding: 10px 5px;
  border-style: solid;
  border-width: 0px;
  overflow: hidden;
  word-break: normal;
  background-color: var(--skeletonBgColor);
}

.line {
  float: left;
  width: 100px;
  height: 16px;
  margin-top: 12px;
  border-radius: 7px;
  background-image: var(--skeletonColor);
  background-size: 600px;
  animation: shine-lines 2s infinite ease-out;
}

@keyframes shine-lines {
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 140px;
  }
}
</style>

